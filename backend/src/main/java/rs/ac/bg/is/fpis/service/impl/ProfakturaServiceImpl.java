/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.service.impl;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import rs.ac.bg.is.fpis.domain.Profaktura;
import rs.ac.bg.is.fpis.domain.StavkaProfakture;
import rs.ac.bg.is.fpis.service.ProfakturaService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)
public class ProfakturaServiceImpl implements ProfakturaService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<Profaktura> getAll() {
        return entityManager.createNamedQuery("Profaktura.findAll").getResultList();
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Profaktura getOne(int id) {
        return entityManager.find(Profaktura.class, id);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Profaktura save(Profaktura profaktura) {
    //ne moze da izvrsi odj jer se profaktura id postavlja od baze, a prim kljuc za stavku je (stavkaid, brojProfakture) 
        List<StavkaProfakture> copy = new ArrayList<>();
        copy.addAll(profaktura.getStavke());
        profaktura.setStavke(new ArrayList<StavkaProfakture>());
        Profaktura attached = entityManager.merge(profaktura);
        profaktura.setBrojProfakture(attached.getBrojProfakture());
        profaktura.setStavke(copy);
        profaktura.getStavke().forEach(stavka -> stavka.setBrojProfakture(profaktura.getBrojProfakture()));
        return entityManager.merge(profaktura);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void delete(int profaktura) {
        String query = "delete from stavkaprofakture where brojProfakture  LIKE '" + profaktura + "'";
        String query1 = "delete from profaktura_nacin where brojProfakture LIKE '" + profaktura + "'";
        String query2 = "delete from uplatnica where brojProfakture LIKE '" + profaktura + "'";
        String query3 = "delete from profaktura where brojProfakture LIKE '" + profaktura + "'";
        Query q = entityManager.createNativeQuery(query);
        Query q1 = entityManager.createNativeQuery(query1);
        Query q2 = entityManager.createNativeQuery(query2);
        Query q3 = entityManager.createNativeQuery(query3);
        q.executeUpdate();
        q1.executeUpdate();
        q2.executeUpdate();
        q3.executeUpdate();
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Profaktura update(Profaktura profaktura) {
        Profaktura attached = getOne(profaktura.getBrojProfakture());
        attached.setDatumIzdavanja(profaktura.getDatumIzdavanja());
        attached.setDatumPrometa(profaktura.getDatumPrometa());
        attached.setNacinPlacanja(profaktura.getNacinPlacanja());
        attached.setIznos(profaktura.getIznos());
        attached.setPozivNaBroj(profaktura.getPozivNaBroj());
        attached.setRadnik(profaktura.getRadnik());
        attached.setStavke(profaktura.getStavke());
        return entityManager.merge(attached);
    }
}

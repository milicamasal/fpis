/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.service.impl;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import rs.ac.bg.is.fpis.domain.Uplatnica;
import rs.ac.bg.is.fpis.service.UplatnicaService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)
public class UplatnicaServiceImpl implements UplatnicaService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Uplatnica getOne(int id) {
        return entityManager.find(Uplatnica.class, id);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<Uplatnica> getAll() {
        return entityManager.createNamedQuery("Uplatnica.findAll").getResultList();
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Uplatnica save(Uplatnica uplatnica) {
        return entityManager.merge(uplatnica);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public void delete(int id) {
        entityManager.remove(getOne(id));
    }

}

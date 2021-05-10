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
import rs.ac.bg.is.fpis.domain.NacinPlacanja;
import rs.ac.bg.is.fpis.service.NacinPlacanjaService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)//mora se pozvati iz transakcije
public class NacinPlacanjaServiceImpl implements NacinPlacanjaService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<NacinPlacanja> getAll() {
        return entityManager.createNamedQuery("NacinPlacanja.findAll").getResultList();
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public NacinPlacanja getOne(int id) {
        return entityManager.find(NacinPlacanja.class, id);
    }

}

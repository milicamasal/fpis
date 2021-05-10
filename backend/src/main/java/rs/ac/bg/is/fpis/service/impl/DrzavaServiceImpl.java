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
import rs.ac.bg.is.fpis.domain.Drzava;
import rs.ac.bg.is.fpis.service.DrzavaService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)//mora se pozvati iz transakcije
public class DrzavaServiceImpl implements DrzavaService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<Drzava> getAll() {
        return entityManager.createNamedQuery("Drzava.findAll").getResultList();
    }
    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Drzava getOne(int id) {
        return entityManager.find(Drzava.class, id);
    }

}
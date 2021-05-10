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
import rs.ac.bg.is.fpis.domain.Grad;
import rs.ac.bg.is.fpis.service.GradService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)//mora se pozvati iz transakcije
public class GradServiceImpl implements GradService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<Grad> getAll() {

        String query = "select g from Grad g";
        return entityManager.createQuery(query, Grad.class).getResultList();

    }
    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<Grad> getAllDrzava(int drzavaID) {
        String query = "select g from Grad g where g.drzava=" + drzavaID;
        return entityManager.createQuery(query, Grad.class).getResultList();

    }
    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Grad getOne(int postanskiBroj) {
        return entityManager.find(Grad.class, postanskiBroj);
    }

}
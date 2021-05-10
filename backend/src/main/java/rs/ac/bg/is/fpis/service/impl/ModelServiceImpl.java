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
import rs.ac.bg.is.fpis.domain.Model;
import rs.ac.bg.is.fpis.service.ModelService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)//mora se pozvati iz transakcije
public class ModelServiceImpl implements ModelService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<Model> getAll() {
        return entityManager.createNamedQuery("Model.findAll").getResultList();
    }

    @Override
    public Model getOne(int id) {
        return entityManager.find(Model.class, id);
    }
}

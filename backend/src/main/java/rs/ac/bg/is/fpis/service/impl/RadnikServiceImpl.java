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
import rs.ac.bg.is.fpis.domain.Radnik;
import rs.ac.bg.is.fpis.service.RadnikService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)
public class RadnikServiceImpl implements RadnikService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<Radnik> getAll() {
        return entityManager.createNamedQuery("Radnik.findAll").getResultList();
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Radnik getOne(int id) {
        return entityManager.find(Radnik.class, id);
    }
}

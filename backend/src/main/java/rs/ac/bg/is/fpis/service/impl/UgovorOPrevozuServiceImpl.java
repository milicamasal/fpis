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
import rs.ac.bg.is.fpis.domain.UgovorOPrevozu;
import rs.ac.bg.is.fpis.service.UgovorOPrevozuService;

@Repository
@Transactional(propagation = Propagation.MANDATORY)//mora se pozvati iz transakcije
public class UgovorOPrevozuServiceImpl implements UgovorOPrevozuService {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public UgovorOPrevozu getOne(int id) {
        return entityManager.find(UgovorOPrevozu.class, id);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public List<UgovorOPrevozu> getAll() {
//        String query = "select * from ugovoroprevozu";
//        return entityManager.createNativeQuery(query).getResultList();
           return entityManager.createNamedQuery("UgovorOPrevozu.findAll").getResultList();
 
    }

}

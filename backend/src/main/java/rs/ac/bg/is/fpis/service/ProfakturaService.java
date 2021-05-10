/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.service;

import java.util.List;
import rs.ac.bg.is.fpis.domain.Profaktura;

public interface ProfakturaService {

    public Profaktura getOne(int id);

    public List<Profaktura> getAll();
    
    public Profaktura save(Profaktura profaktura);
    
    public Profaktura update(Profaktura profaktura);
    
    public void delete(int id);
}

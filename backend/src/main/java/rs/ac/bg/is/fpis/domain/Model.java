/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "model")
@NamedQueries({
    @NamedQuery(name = "Model.findAll", query = "SELECT m FROM Model m")})
public class Model implements Serializable {

    @Id
    @Column(name = "idModela", length = 10)
    private int idModela;
    @Column
    private String opisModela;

    public Model() {
    }

    public Model(int idModela, String opisModela) {
        this.idModela = idModela;
        this.opisModela = opisModela;
    }

    public String getOpisModela() {
        return opisModela;
    }

    public void setOpisModela(String opisModela) {
        this.opisModela = opisModela;
    }

    public int getIdModela() {
        return idModela;
    }

    public void setIdModela(int idModela) {
        this.idModela = idModela;
    }
    
}

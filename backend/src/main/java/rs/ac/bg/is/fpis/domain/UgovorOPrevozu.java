/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "ugovoroprevozu")
@NamedQueries({
    @NamedQuery(name = "UgovorOPrevozu.findAll", query = "SELECT u FROM UgovorOPrevozu u")})
public class UgovorOPrevozu implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "brojUgovora")
    private int brojUgovora;
    @Column
    @Temporal(javax.persistence.TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datumIzdavanja;

    public UgovorOPrevozu(int brojUgovora, Date datumIzdavanja) {
        this.brojUgovora = brojUgovora;
        this.datumIzdavanja = datumIzdavanja;
    }

    public UgovorOPrevozu() {
    }

    public int getBrojUgovora() {
        return brojUgovora;
    }

    public void setBrojUgovora(int brojUgovora) {
        this.brojUgovora = brojUgovora;
    }

    public Date getDatumIzdavanja() {
        return datumIzdavanja;
    }

    public void setDatumIzdavanja(Date datumIzdavanja) {
        this.datumIzdavanja = datumIzdavanja;
    }

}

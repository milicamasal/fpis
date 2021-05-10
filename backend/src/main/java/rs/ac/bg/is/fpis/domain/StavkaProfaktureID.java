/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.domain;

import java.io.Serializable;
import java.util.Objects;

public class StavkaProfaktureID implements Serializable {
    Integer brojProfakture;
    Integer idStavke;

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 53 * hash + Objects.hashCode(this.brojProfakture);
        hash = 53 * hash + Objects.hashCode(this.idStavke);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final StavkaProfaktureID other = (StavkaProfaktureID) obj;
        if (!Objects.equals(this.brojProfakture, other.brojProfakture)) {
            return false;
        }
        if (!Objects.equals(this.idStavke, other.idStavke)) {
            return false;
        }
        return true;
    }

}
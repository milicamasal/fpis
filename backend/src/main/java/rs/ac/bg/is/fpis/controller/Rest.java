/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rs.ac.bg.is.fpis.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.bg.is.fpis.domain.Drzava;
import rs.ac.bg.is.fpis.domain.Grad;
import rs.ac.bg.is.fpis.domain.Korisnik;
import rs.ac.bg.is.fpis.domain.Model;
import rs.ac.bg.is.fpis.domain.NacinPlacanja;
import rs.ac.bg.is.fpis.domain.Profaktura;
import rs.ac.bg.is.fpis.domain.Radnik;
import rs.ac.bg.is.fpis.domain.UgovorOPrevozu;
import rs.ac.bg.is.fpis.domain.Uplatnica;
import rs.ac.bg.is.fpis.domain.Valuta;
import rs.ac.bg.is.fpis.service.DrzavaService;
import rs.ac.bg.is.fpis.service.GradService;
import rs.ac.bg.is.fpis.service.KorisnikService;
import rs.ac.bg.is.fpis.service.ModelService;
import rs.ac.bg.is.fpis.service.NacinPlacanjaService;
import rs.ac.bg.is.fpis.service.ProfakturaService;
import rs.ac.bg.is.fpis.service.RadnikService;
import rs.ac.bg.is.fpis.service.UgovorOPrevozuService;
import rs.ac.bg.is.fpis.service.UplatnicaService;
import rs.ac.bg.is.fpis.service.ValutaService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Rest {

    DrzavaService drzavaService;
    GradService gradService;
    KorisnikService korisnikService;
    ModelService modelService;
    NacinPlacanjaService nacinPlacanjaService;
    ProfakturaService profakturaService;
    RadnikService radnikService;
    UgovorOPrevozuService ugovorOPrevozuService;
    UplatnicaService uplatnicaService;
    ValutaService valutaService;

    @Autowired
    public Rest(DrzavaService drzavaService, GradService gradService, KorisnikService korisnikService, ModelService modelService, NacinPlacanjaService nacinPlacanjaService, ProfakturaService profakturaService, RadnikService radnikService, UgovorOPrevozuService ugovorOPrevozuService, UplatnicaService uplatnicaService, ValutaService valutaService) {
        this.drzavaService = drzavaService;
        this.gradService = gradService;
        this.korisnikService = korisnikService;
        this.modelService = modelService;
        this.nacinPlacanjaService = nacinPlacanjaService;
        this.profakturaService = profakturaService;
        this.radnikService = radnikService;
        this.ugovorOPrevozuService = ugovorOPrevozuService;
        this.uplatnicaService = uplatnicaService;
        this.valutaService = valutaService;
    }

    @GetMapping("/drzava/all")
    @ResponseBody
    public List<Drzava> getAllDrzava() {
        return drzavaService.getAll();
    }

    @GetMapping("/grad/all")
    @ResponseBody
    public List<Grad> getAllGrad() {
        return gradService.getAll();
    }

    @GetMapping(value = "/grad/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Grad> getGradDrzava(@PathVariable int id) {
        return gradService.getAllDrzava(id);
    }

    @GetMapping("/korisnik/all")
    @ResponseBody
    public List<Korisnik> getAllKorisnik() {
        return korisnikService.getAll();
    }

    @GetMapping("/model/all")
    @ResponseBody
    public List<Model> getAllModel() {
        return modelService.getAll();
    }

    @GetMapping("/nacinPlacanja/all")
    @ResponseBody
    public List<NacinPlacanja> getAllNacinPlacanja() {
        return nacinPlacanjaService.getAll();
    }

    @GetMapping("/profaktura/all")
    @ResponseBody
    public List<Profaktura> getAllProfaktura() {
        return profakturaService.getAll();
    }

    @GetMapping(value = "/profaktura/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Profaktura getOneProfaktura(@PathVariable int id) {
        return profakturaService.getOne(id);
    }

    @PostMapping(value = "/profaktura", produces = MediaType.APPLICATION_JSON_VALUE, consumes = "application/json")
    public Profaktura saveProfaktura(@RequestBody Profaktura profaktura) {
        return profakturaService.save(profaktura);
    }

    @DeleteMapping(value = "/profaktura/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void removeProfaktura(@PathVariable int id) {
        profakturaService.delete(id);
    }

    @GetMapping("/radnik/all")
    @ResponseBody
    public List<Radnik> getAllRadnik() {
        return radnikService.getAll();
    }

    @GetMapping("/uplatnica/all")
    @ResponseBody
    public List<Uplatnica> getAllUplatnica() {
        return uplatnicaService.getAll();
    }

    @GetMapping("/ugovorOPrevozu/all")
    @ResponseBody
    public List<UgovorOPrevozu> getAllUgovorOPrevozu() {
        return ugovorOPrevozuService.getAll();
    }

    @GetMapping(value = "/uplatnica/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Uplatnica getOneUplatnica(@PathVariable int id) {
        return uplatnicaService.getOne(id);
    }

    @PostMapping(value = "/uplatnica", produces = MediaType.APPLICATION_JSON_VALUE, consumes = "application/json")
    public Uplatnica saveUplatnica(@RequestBody Uplatnica uplatnica) {
        return uplatnicaService.save(uplatnica);
    }

    @DeleteMapping(value = "/uplatnica/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void removeUplatnica(@PathVariable int id) {
        uplatnicaService.delete(id);
    }

    @GetMapping("/valuta/all")
    @ResponseBody
    public List<Valuta> getAllValuta() {
        return valutaService.getAll();
    }
}

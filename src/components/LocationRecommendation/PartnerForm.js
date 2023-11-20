function PartnerForm() {
return (
    <form className='stand-forms'>
    <div className="form-group">
      <input type="text" id="ihrname" placeholder="Ihr Name *"/>
    </div>
    <div className="form-group">
      <input type="text" id="telefon" placeholder="Telefonnummer*"/>
    </div>
    <div className="form-group">
      <input type="text" id="email" placeholder="E-Mail*"/>
    </div>
    <div className="form-group">
      <input type="text" id="firmenname" placeholder="Firmenname"/>
    </div>
    <div className="form-group">
      <input type="text" id="firmenname" placeholder="Firmenname"/>
    </div>
    <div className="form-group">
      <select id="funktion">
        <option>Funktion des Kontakes</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  
    <div className="form-group">
      <select id="artdes">
        <option>Art des Standortes</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  
    <div className="form-group">
      <select id="adressedes">
        <option>Adresse des Grundstücks</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  
    <div className="form-group">
      <select id="zusatzliche">
        <option>Zusätzliche Anmerkungen</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <button type="submit" className="main-btn border-6 cc-button">Senden</button>
  </form>
)
}

export default PartnerForm;
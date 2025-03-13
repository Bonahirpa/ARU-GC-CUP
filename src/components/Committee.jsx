import React from 'react'
import Abdi from "../assets/images/abdi.jpg";
import Awel from "../assets/images/Awel.jpg"
import Chare from "../assets/images/chare.jpg"
import Temesgen from "../assets/images/temesgen.jpg"
import Hezekias from "../assets/images/Hezekias.jpg"
import Nure from "../assets/images/nura.jpg";
function Committee() {
  return (
    <>
      <section id="teams">
  <h2>Committee</h2>
  <div class="team-container">
    <div class="team-card">
      <img src={Abdi} alt="Abdi"  />
      <p>Abdi</p>
    </div>
    <div class="team-card">
      <img src={Awel} alt="Awel" />
      <p>Awel</p>
    </div>
    <div class="team-card">
      <img src={Chare} alt="Chare" />
      <p>Chare</p>
    </div>
    <div class="team-card">
      <img src={Temesgen} alt="temesgen" />
      <p>Temesgen</p>
    </div>
    <div class="team-card">
      <img src={Hezekias} alt="Hezekias" />
      <p>Hezekias</p>
    </div>
    <div class="team-card">
      <img src={Nure} alt="nura" />
      <p>Nura</p>
    </div>
  </div>
</section>
    </>
  )
}

export default Committee

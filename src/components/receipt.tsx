import '../styles/receipt.css';

export default function Receipt() {
  return (
    <div className="receipt-container">
      <div className="receipt">
        <div className="receipt-body">
          {/* HEADER */}
          <h3>Presupuesto</h3>
          <div className="divider" />

          {/* ENTRIES */}
          <div className="receipt-entry">
            <span>Manejo de redes</span>
            <span className="dots" />
            <span>$300.000</span>
          </div>
          <div className="receipt-entry">
            <span>Creación de contenido</span>
            <span className="dots" />
            <span>$300.000</span>
          </div>

          <div className="divider" />

          {/* FOOTER */}
          <div className="receipt-entry">
            <span style={{ fontWeight: 500 }}>TOTAL*</span>
            <span className="dots" />
            <span style={{ fontWeight: 500 }}>$600.000</span>
          </div>
        </div>

        <div className="receipt-footer">
          <div className="warning">
            <p>
              Esta propuesta está diseñada para maximizar el impacto
              de la marca en redes sociales, generando crecimiento,
              interacciones y ventas. Sin embargo, la estrategia y el
              presupuesto pueden ajustarse según las necesidades
              específicas del negocio, garantizando siempre la mejor
              opción para alcanzar los objetivos planteados.
            </p>
          </div>
          <div className="disclaimer">
            <p>*
              No contempla las campañas publicitarias pagas,
              las cuales tendrán un costo aparte, determinado por la plataforma,
              dependiendo de la duración y el alcance.
            </p>
            <p>* El monto se actualizará de forma <strong>bimestral</strong> por <strong>IPC.</strong></p>
          </div>
        </div>
      </div>
      <div className="contact">
        <a href="mailto:contact@volfram.studio">
          <img src="/mail.svg" alt="Mail" height={20} width={20} style={{ fill: 'white'}}/>
        </a>
        <a href="https://wa.me/5491156981844" target="_blank">
          <img src="/whatsapp.svg" alt="WhatsApp" height={20} width={20} style={{fill: 'white', stroke: 'white'}} />
        </a>
        <a href="tel:+5491156981844">
          <img src="/telephone.svg" alt="Phone number" height={20} width={20} />
        </a>
        <p>-</p>
        <h1 style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Volfram Studio</h1>
      </div>
    </div>
  )
}
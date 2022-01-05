import './servise.css'
import servise1 from '../../assets/service.png'
import servise2 from '../../assets/service (1).png'
import servise3 from '../../assets/service.png'
import servise4 from '../../assets/service.png'
import servise5 from '../../assets/service.png'

  function servise (){
      return (      
        <div className="container">
        <h1 className="main-title">
           Xizmatlar
          </h1>
    <p className="p-text">
    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis <br /> lacinia ex, eget 
    sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
    </p>
   <ul className="sites-wrapper">
       <li className="sites-links">
          <a href="#">
                <img src={servise1} width="320px" height="260px" alt="" />
           </a>
       </li>
       <li className="sites-links">
          <a href="#">
                <img src={servise2} width="320px" height="260px" alt="" />
          </a>
      </li>
      <li className="sites-links">
          <a href="#">
                <img src={servise3} width="320px" height="260px" alt="" />
          </a>
      </li>
      <li className="sites-links">
         <a href="#">
                <img src={servise4} width="320px" height="260px" alt="" />
          </a>
      </li>
      <li className="sites-links">
          <a href="#">
                <img src={servise5} width="320px" height="260px" alt="" />
          </a>
      </li>
  </ul>
  <ul className="btn-links-wrapper">
       <li className="btn-link-links">
            <button className="btn3" type="submit">Buyurtma berish</button>
        </li>
         <li className="btn-link-links">
            < a className="active" href="#">Xizmatlar sahifasiga otish</a>
        </li>
  </ul>
</div>
      )
  }

  export default servise;
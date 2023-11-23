import React from 'react'
import homeimg from '../Assets/home-outline.svg'
import accimg from '../Assets/person-circle-outline.svg'
import cardsimg from '../Assets/card-outline.svg'
import paymimg from '../Assets/logo-paypal.svg'
import staimg from '../Assets/stats-chart-outline.svg'
import teamimg from '../Assets/user-solid.svg'
import settimg from '../Assets/settings-outline.svg'
import './navbar.css'
import { Link } from 'react-router-dom'

const Nabar = () => {
  return (
    <div className="full">
    <div className='leftbar'>
      <div className="home">
        <button>
        <img src={homeimg} alt="" />
        </button>
      </div>
      <div className="accounts">
      <button>
        <img src={accimg} alt="" />
        </button>
      </div>
      <div className="cards">
        <button>
        <img src={cardsimg} alt="" />
        </button>
      </div>
      <div className="payments">
      <button>
        <img src={paymimg} alt="" />
        </button>
      </div>
      <div className="mystatus">
      <button>
        <img src={staimg} alt="" />
        </button>
      </div>
      <div className="teams">
      <button>
        <img src={teamimg} alt="" />
        </button>
      </div>
      <div className="settings">
      <button>
        <img src={settimg} alt="" />
        </button>
      </div>
    </div>
    <div className="list">
            <ul>
                <li><Link></Link>Home</li>
                <li><Link></Link>Account</li>
                <li><Link></Link>Cards</li>
                <li><Link></Link>Payments</li>
                <li><Link></Link>Status</li>
                <li><Link></Link>Teams</li>
                <li><Link></Link>Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default Nabar

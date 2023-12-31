import React, { useState } from 'react'
import './assets/book.css'
import myImage from './assets/img.png';

export default function Book() {

    const [l, setl] = useState(1);
    const [r, setr] = useState(2);
    const [m, setm] = useState(2);
    const next = () => {
        if (r < 10) {
            setl(() => l + 2)
            setm(() => m + 1)
            setr(() => r + 2)
        }
    }
    const prev = () => {
        if (l > 1) {
            setl(() => l - 2)
            setm(() => m - 1)
            setr(() => r - 2)
        }
    }

    const [zi, setZI] = useState(100);
    const Zoomin = () => {
        setZI(zi + 10)
    }
    const Zoomot = () => {
        setZI(zi - 10)
    }

    return (
        <div className="main">
            <nav className="navbar fixed-top ">
                <div className="container-flid">
                    <a className="navbar-brand" href="http://www.sbioaschooltrichy.org/">
                        <img src={myImage} className='img' alt="" />
                        <span>
                            SBIOA Senior Secondary School
                        </span>
                    </a>
                </div>
                <div className="pg">
                    <button className="btn btn-outline-light" type="submit" onClick={Zoomin} ><i className="bi bi-zoom-in" ></i></button>
                    <form className="d-flex"  >
                        <input className="form-control" type="text" aria-label="default input example" readOnly value={`${l}-${r}`} />
                    </form>
                    <button className="btn btn-outline-light" type="submit" onClick={Zoomot} ><i className="bi bi-zoom-out" ></i></button>
                </div>
                <div className="down">
                    <a href="">
                        <button className="btn btn-outline-light" type="submit"><i className="bi bi-cloud-download"></i></button>
                    </a>
                </div>
            </nav>
            <div className="book" style={{ width: `${zi}vw`, height: `${zi}vh` }}>
                <div className="btn-l">
                    <button className="btn btn-outline-light btn-lg" type="submit" onClick={prev}><i className="bi bi-arrow-left"></i></button>
                </div>
                <div className="pages">
                    <div className="ipgs">
                        <img className='pgimg' src={`/imgs/2/tinified/2-${l}.jpg`} alt="" loading='lazy'/>
                    </div>
                    <div className="ipgs-m" >
                        <img className='pgimg' src={`/imgs/2/2-${m}.jpg`} alt="" loading='lazy'/>
                    </div>
                    <div className="ipgs">
                        <img className='pgimg' src={`/imgs/2/tinified/2-${r}.jpg`} alt="" loading='lazy'/>
                    </div>

                </div>
                <div className="btn-r">
                    <button className="btn btn-outline-light btn-lg" type="submit" onClick={next}  ><i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

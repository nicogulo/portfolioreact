import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faReact,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

import '../elements/Social/index.scss';

export default function MostPicked(props) {
  return (
    <section className="container pt-4">
      <Fade bottom>
        <h4>About Me</h4>
        <div className="row align-items-center">
          <div className="col-6 pr-2" style={{ width: 530 }}>
            <p
              className="h5 mb-4 font-weight-light"
              style={{ lineHeight: '170%' }}
            >
              Saya adalah Mahasiswa semester Akhir dari Institut teknologi PLN
              Jakarta. Saat Ini saya sedang mendalami Frontend Web Developer,
              dan sudah terbiasa munggunaka HTML, CSS, dan
              <Button
                className="btn-lang px-4 mx-3"
                hasShadow
                style={{ borderRadius: 30 }}
              >
                JavaScript{' '}
                <a href="https://www.javascript.com/" className="js lang">
                  <FontAwesomeIcon icon={faJs} size="2x" />
                </a>
              </Button>
            </p>
          </div>
          <div className="col-6 pr-2 text-center" style={{ width: 530 }}>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              style={{ borderRadius: 30 }}
            >
              Download CV
            </Button>
          </div>
        </div>
      </Fade>
    </section>

    // <section className="container" ref={props.refMostPicked}>
    //   <Fade bottom>
    //     <h4 className="mb-3">About Me</h4>

    //     <div className="container-grid">
    //       {props.data.map((item, index) => {
    //         return (
    //           <div
    //             key={`mostpicked-${index}`}
    //             className={`item column-6${index === 0 ? ' row-2' : ' row-1'}`}
    //           >
    //             <Fade bottom delay={500 * index}>
    //               <div className="card card-featured">
    //                 <Fade bottom delay={500}>

    //                   <Button
    //                     className="btn px-5"
    //                     hasShadow
    //                     isPrimary
    //                     style={{ borderRadius: 30 }}
    //                   >
    //                     Scroll Down
    //                   </Button>
    //                 </Fade>
    //                 {/* <div className="tag">
    //                   ${item.price}
    //                   <span className="font-weight-light">/ {item.unit}</span>
    //                 </div> */}
    //                 <figure className="img-wrapper">
    //                   <img
    //                     src={item.imageUrl}
    //                     alt={item.name}
    //                     className="img-cover"
    //                   />
    //                 </figure>
    //                 <div className="meta-wrapper">
    //                   <Button
    //                     type="link"
    //                     className="stretched-link d-block text-white"
    //                     href={`/properties/${item._id}`}
    //                   >
    //                     <h5>{item.name}</h5>
    //                   </Button>
    //                   <span>
    //                     {item.city}, {item.country}
    //                   </span>
    //                 </div>
    //               </div>
    //             </Fade>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </Fade>
    // </section>
  );
}

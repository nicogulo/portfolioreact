import React from 'react';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export default function Portfolios({ data }) {
  return data.map((portfolio, index1) => {
    return (
      <section className="container" key={`portfolio-${index1}`}>
        <Fade bottom>
          <div>
            <h4 className="mb-3 text-center">
              Featured <span className="font-weight-bold">Portfolio</span>
            </h4>
          </div>
          <div className="row mb-3 font-weight-medium">
            <h4 className="col-1">{portfolio.name}</h4>{' '}
            <img
              className="col-1"
              src={portfolio.logo}
              alt=""
              style={{ height: 32, paddingLeft: 0 }}
            />
          </div>
          <div className="container-grid">
            {portfolio.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`portfolio-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper mb-2">
                        <a
                          target="blank"
                          href={`${item._id}`}
                          className="stretched-link d-blok text-gray-800"
                        >
                          <h5 className="h4 px-2">{item.name}</h5>
                        </a>
                        <p
                          className="text-grey-500 px-2 py-2"
                          style={{ fontSize: 14 }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
          <div className="col mt-5 font-weight-medium text-center">
            <a href={`${portfolio.more}`} target="blank">
              <Button
                className="btn-lang px-4 mx-5"
                hasShadow
                style={{ borderRadius: 30 }}
              >
                See more..
              </Button>
            </a>
          </div>
        </Fade>
      </section>
    );
  });
}

import React from "react";
import IconText from "./IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col" style={{ width: 400 }}>
            <IconText />
            <p className="brand-tagline">We kaboom your beauty holiday <br/> instantly and memorable</p>
          </div>
          <div className="col-3 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Book a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payments">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Getting Touch</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@vinstay.id">
                  support@vinstay.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6202103082003">
                  021 - 0308 - 2003
                </Button>
              </li>
              <li className="list-group-item">
                <span>Vinstay Oy. Surabaya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">Copyright 2024 • All rights reserved • Vinstay</div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import './TextContainer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const TextContainer = () => {
  return (
    <>
     <div className="container">
      <div className='vertical-sidebar'></div>
      <div className="text-section">
        <p className="first-paragraph">Structured gripped tape invisible moulded cups for scupper firm hold strong power mesh bust liner sport detail. Warmth comfort hinge woolens from the body large pocket at the front full button detail cotton blend cute functional. Seduction skirts bright primary colours. punchy palette pleased cheerleader vile stripe trim. Rupee court shoe chunky mid block heel almond toe flexible rubber sole simple.</p>
        <p className="second-paragraph">styling handmade metallic stitches. Contemporary spun silk pocket square sophisticated luxurious cool proof pocket pattern. On hand shopper situation.</p>
        <p className="third-paragraph">Silking pewter studded specialties silver zipper inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours chrome quartz leather shop fasteners with a pin a hockle clasp. Workwear brow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophisticated slipper shoe. Flute elegant pointed toe design out-out soles luxe leather bring versatile shoe must-have new season glamorous.</p>
      </div>

      <div className="quote-section">
        <p className="quote">KNICKER LINING CONCEALED BACK ZIP <br/> FASTEN SWING STYLE HIGH WAISTED <br/> DOUBLE LAYER FULL PATTERN FLORAL.</p>
      </div>

      <div className="text-section">
        <p className="fourth-paragraph">Foam padding in the insole's leather trim quality staple flat slip-on design pointed toe off-duty shoe. Block knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
        <p className="fifth-paragraph">Laoreet semper tellus venenatis. Donec odio tempus. Fells arcu pretium metus nullam quam semper sodales quis viverra neque via libero. Venenatis nullam fringilla pretium magnis aliquam morbi vulputate integer augue ultricies cras. Eget viverra feugiat cras sit. Sit netuspe montes tempus ligula eget vitae pede rhoncus maecenas consectetur commodo condimentum egestas.</p>
      </div>

      <div className="heading-section">
        <p className="heading">EU RIDICULUS FRINGILLA AENEAN</p>
      </div>

      <div className="text-section">
        <p className="sixth-paragraph">Sociis senectus adipiscing sit curabitur dolores sem luctus eros natoque vestibulum dolore eget dapibus. Neo vitae miso ullamcorper. A aenean at augue scelerisque at parturient nat paid enim. Ratio res quis ut ipsumque sem commodo dui ante luctus ultricies tellus montes. Quis in sapien tempus.</p>
      </div>

      <div className="list-section">
        <ul className="list">
          <li>Crop fresh icon elegant timeless clean perfume</li>
          <li>Neck straight sharp silhouette and dart detail</li>
          <li>Machine wash cold able fit premium stretch selvage denim comfortable low waist</li>
        </ul>
      </div>

      <div className="text-section">
        <p className="seventh-paragraph">See-Through delicate embroidered organize blue lining luxury watermills stretch pleat detailing. Leather detail shoulder contrast colour contour stunning stitching working paolgin. Statement buttons cover up bespoke patch pockets topline stitching cropped jacket. Effortless comfortable full leather living eye-catching unique detail to the barker 'cut-away' solid colour casual and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
      </div>

      <div className="footer__sections">
        <div className="footer-left">
          <p>694</p>
          <p>Share</p>
        </div>
        <div className="footer-center">
            <FaFacebook />
          <p>Facebook</p>
        </div>
        <div className="footer-right">
          <FaTwitter/>
          <p>Tweet</p>
        </div>
        <div className="footer-end">
          <FaPinterest />
          <p>Tweet</p>
        </div>

      </div>

      <div className="comment-section">
        <button className='view-btn'>View Comments (0)</button>
      </div>
    </div> 
    </>
  )
}

export default TextContainer
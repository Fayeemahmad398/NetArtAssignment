import { IoLogoFacebook } from "react-icons/io5";
import { IoCall } from "react-icons/io5"; import { TbWorld } from "react-icons/tb";
function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <IoCall />
                <div>

                    Toll free 180020001234
                </div>

            </div>
            <div className="icons">

                <IoLogoFacebook />
                <div>
                    www.facebook.com/cripumps
                </div>
            </div>
            <div className="icons">
                <TbWorld />
                <div>

                    www.crigroups.com
                </div>

            </div>

        </div>
    )
}

export default Footer

import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/logo.png"

function Home() {
    return (
        <React.Fragment>
            <div>
                <div>
                    <Image src={logo.src} alt="logo" layout="fill"></Image>
                </div>
                <button>
                    <Link href="/user/login">
                        <a>sddf</a>
                    </Link>
                </button>
            </div>
        </React.Fragment>
    )
}

//getSersideRendering Function

export default Home

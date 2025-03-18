import React from "react";
import Band from "../Band/index"
import { Link } from "react-router-dom";
import style from "./Main.module.css"
import bandas from "../../data/bancoBands"

function Main() {
    return (
            <main className={style.main}>
                {
                    bandas.map((banda, index)=> (
                        <section>
                            <Link key={banda.id} to={`band/${banda.id}`}>
                            <Band key={index}  {...banda} />
                            </Link>
                        </section>
                    ))
                }
                {/* <section>
                <Band  imagem="https://static.vecteezy.com/ti/vetor-gratis/p3/2972281-simbolo-do-rock-n-roll-conceito-arte-do-rock-music-em-estilo-monocromatico-vetor.jpg" nome="Banda 01" 
                descricao="Uma banda legal"/>
                </section> */}
            </main>
    )
}

export default Main;



import React from "react";
import Band from "../Band/index"
import style from "./Main.module.css"

const bandas = [
    {
        nome: 'Banda 01',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome: 'Banda 02',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome: 'Banda 03',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        nome: 'Banda 04',
        imagem: 'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
        descricao: 'Descrição da Banda 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
];

function Main() {
    return (
            <main className={style.main}>
                {
                    bandas.map((banda, index)=> (
                        <section>
                            <Band key={index}  {...banda} />
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



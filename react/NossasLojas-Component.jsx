import { useCssHandles } from 'vtex.css-handles'
import './components/Nossas-Lojas-Comp/index.css'
import $ from 'jquery'
import React, { useEffect, useRef } from 'react'
import RichText from 'vtex.rich-text/index'
const Handles = [
    'NJ-Container',
    'NJ-Card',
    'NJ-Image',
    'NJ-Title',
    'NJ-Desc',
    'NJ-Span',
    'NJ-Section'
]
const NossasLojas = ({ list, pageTitle }) => {
    const newList = list.filter((e) => e.active == true)
    const handlesCC = useCssHandles(Handles);
    const hc = handlesCC.handles
    return (
        <section className={hc['NJ-Section']}>
            <h1>{pageTitle}</h1>
            <div className={hc["NJ-Container"]}>
                {newList.length && newList.map((item, index) => {
                    return (

                        <a href={item.link}>
                            {console.log({ item })}
                            <div className={hc["NJ-Card"]} key={index}>
                                <img className={hc["NJ-Image"]} src={item.imgURL} alt={item.title} />
                                <div className={hc["NJ-Desc"]}>
                                    <h3 className={hc["NJ-Title"]} >{item.title}</h3>
                                    <RichText className={hc['NJ-Desc']} text={item.description}/>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}
NossasLojas.defaultProps = {
    list: [
        {
            imgURL: "https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/0208ee68-435e-43c0-add8-e74a046b1651___140ab59e2ccaf3efc03258fdd4976620.png",
            title: "Placeholder",
            description: "dPlaceholder",
            active: true,
            link: "/"
        }
    ],
    pageTitle: "Nossas lojas"
}

NossasLojas.schema = {
    title: "Nossas Lojas",
    description: "Nossas Lojas",
    type: "object",
    properties: {
        list: {
            type: "array",
            title: 'lista de lojas',
            default: NossasLojas.defaultProps.list,
            items: {
                properties: {
                    "__editorItemTitle": {
                        "title": "ID de Visualização",
                        "description": "Só será visível dentro do Site Editor",
                        "type": "string"
                    },
                    imgURL: {
                        title: "Imagem",
                        description: "Imagem",
                        type: "string",
                        default: "https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/0208ee68-435e-43c0-add8-e74a046b1651___140ab59e2ccaf3efc03258fdd4976620.png",
                        widget: {
                            "ui:widget": "image-uploader"
                        }
                    },
                    title: {
                        title: 'Titulo do card',
                        description: 'Titulo do card',
                        type: 'string',
                    },
                    description: {
                        title: 'Descrição do card',
                        description: 'Descrição do card',
                        type: 'string',
                        widget: {
                            "ui:widget": "textarea"
                        },
                        enum: ["html", "rich-text"],
                        enumNames: [
                            "HTML",
                            "Rich Text"
                        ]
                    },
                    active: {
                        title: 'Visibilidade',
                        description: 'Estara visivel?',
                        type: 'boolean',
                        default: true
                    },
                    link: {
                        title: "Pagina da loja",
                        description: "Redirecionar Loja",
                        type: "string",
                        default: "/"
                    }
                },
            },
        },
        pageTitle: {
            title: "Titulo da Pagina",
            description: "Titulo da Pagina",
            type: "string",
            default: "Nossas lojas"
        }
    },
}

export default NossasLojas
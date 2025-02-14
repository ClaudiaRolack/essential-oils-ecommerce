const productos = [
    { id:1, tipo: 'ai',  producto: "clary sage", precio: 52000, img: "../public/images/2aiclarysage.webp" },
    { id:2, tipo: 'ai', producto: "copaiba", precio: 49500, img: "../public/images/2aicopaiba.webp" },
    { id:3, tipo: 'ai', producto: "cypress", precio: 23500, img: "../public/images/2aicypress.webp" },
    { id:4, tipo: 'ai', producto: "fennel", precio: 22000, img: "../public/images/2aifennel.webp" },
    { id:5, tipo: 'ai', producto: "frankincense", precio: 100000, img: "../public/images/2aifrankincense.webp" },
    { id:6, tipo: 'ai', producto: "geranium", precio: 57500, img: "../public/images/2aigeranium.webp" },
    { id:7, tipo: 'ai', producto: "lavender", precio: 34000, img: "../public/images/2ailavender.webp" },
    { id:8, tipo: 'ai', producto: "lemon", precio: 17500, img: "../public/images/2ailemon.webp" },
    { id:9, tipo: 'ai', producto: "oregano", precio: 33500, img: "../public/images/2aioregano.webp" },
    { id:10, tipo: 'ai', producto: "peppermint", precio: 32000, img: "../public/images/2aipeppermint.webp" },
    { id:11, tipo: 'ai', producto: "rosemary", precio: 24000, img: "../public/images/2airosemary.webp" },
    { id:12, tipo: 'ai', producto: "spearmint", precio: 37500, img: "../public/images/2aispearmint.webp" },
    { id:13, tipo: 'ai', producto: "tea tree", precio: 30700, img: "../public/images/2aiteatree.webp" },
    { id:14, tipo: 'ai', producto: "tumeric", precio: 40000, img: "../public/images/2aitumeric.webp" },
    { id:15, tipo: 'ai', producto: "wild orange", precio: 14700, img: "../public/images/2aiwildorange.webp" },
    { id:16, tipo: 'ai', producto: "ylan ylang", precio: 53500, img: "../public/images/2aiylangylang.webp" },
    { id:17, tipo: 'am', producto: "adaptiv", precio: 53500, img: "../public/images/3madaptiv.webp" },
    { id:18, tipo: 'am',producto: "aroma touch", precio: 40000, img: "../public/images/3maromatouch.webp" },
    { id:19, tipo: 'am',producto: "balance", precio: 28000, img: "../public/images/3mbalance.webp" },
    { id:20, tipo: 'am',producto: "breathe", precio: 33500, img: "../public/images/3mbreathe.webp" },
    { id:21, tipo: 'am',producto: "citrus bliss", precio: 26000, img: "../public/images/3mcitrusbliss.webp" },
    { id:22, tipo: 'am',producto: "deep blue", precio: 46700, img: "../public/images/3mdeepblue.webp" },
    { id:23, tipo: 'am',producto: "digestzen", precio: 45500, img: "../public/images/3mdigestzen.webp" },
    { id:24, tipo: 'am',producto: "holiday peace", precio: 38700, img: "../public/images/3mholidaypeace.webp" },
    { id:25, tipo: 'am',producto: "lemon eucalyptus", precio: 18700, img: "../public/images/3mlemoneucalyptus.webp" },
    { id:26, tipo: 'am',producto: "on guard", precio: 48000, img: "../public/images/3monguard.webp" },
    { id:27, tipo: 'am',producto: "purify", precio: 29500, img: "../public/images/3mpurify.webp" },
    { id:28, tipo: 'am',producto: "serenity", precio: 48000, img: "../public/images/3mserenity.webp" }
]

function obtenerProductoPorId(id) {
    return productos.find(producto => producto.id === id);
}
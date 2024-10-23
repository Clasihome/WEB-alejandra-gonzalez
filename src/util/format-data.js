export default (data) => {
  return (
    {
      builderId: data._id ? data._id : "5fb2a5f3ea262c2e14e462ad",
      typeId: data.user ? "user" : "office",
      officeId: data.user ? data.user : data.office,
      primaryColor: data.primaryColor ? data.primaryColor : "#6d8994",
      address: data.address ? data.address : "Osorno",
      email: data.email ? data.email : "contacto@iaga.cl",
      facebook: data.facebook ? data.facebook : "https://m.facebook.com/profile.php?id=61563710312132&locale=es_LA",
      twitter: data.twitter ? data.twitter : "https://twitter.com",
      instagram: data.instagram ? data.instagram : "https://www.instagram.com/iagaasesoriainmobiliaria?igsh=ZHl5M2I2OXl5bWln",
      favicon: data.favicon ? data.favicon : require("../images/icon.png"),      
      lat: data.lat ? data.lat : "-40.57530852490183",
      lng: data.lng ? data.lng : "-73.14105085337322",
      logo: data.logo ? data.logo : require("../images/logo-light.png"),
      logoDark: data.logoDark ? data.logoDark : require("../images/logo-dark.png"),
      movil: data.movil ? data.movil : "+56 9 7350 2662",
      phone: data.phone ? data.phone : "+56 9 7350 2662",
      footerText: data.footerText ? data.footerText : "Asesora inmobiliaria, con 20 años de experiencia en el rubro, dedicada a ofrecer un servicio personalizado y profesional a nuestros clientes.",
      home: {
        hero: {
          background: data.home && data.home.hero && data.home.hero.background ? data.home.hero.background : require("../images/template-home-hero-background.jpg"),
          title: data.home && data.home.hero && data.home.hero.title ? data.home.hero.title : "Alejandra González - Asesoría inmobiliaria"
        },
        properties: {
          title: data.home && data.home.properties && data.home.properties.title ? data.home.properties.title : "Contamos con una selección exclusiva de propiedades.",
          maxProperties: data.home && data.home.properties && data.home.properties.maxProperties ? data.home.properties.maxProperties : 9,
          footer: data.home && data.home.properties && data.home.properties.footer ? data.home.properties.footer : "Estas son solo algunas de las propiedades que tenemos para ofrecerte",
          buttonText: data.home && data.home.properties && data.home.properties.buttonText ? data.home.properties.buttonText : "Ver más"
        },
        about: {
          banner: {
            image: data.home && data.home.about && data.home.about.banner && data.home.about.banner.image ? data.home.about.banner.image : require("../images/template-home-about-hero-background.jpg"),

            image2: data.home && data.home.about && data.home.about.banner && data.home.about.banner.image ? data.home.about.banner.image2 : require("../images/AlianzaNexxos.jpg"),
            title: data.home && data.home.about && data.home.about.banner && data.home.about.banner.title ? data.home.about.banner.title : "Asesora inmobiliaria, con 20 años de experiencia en el rubro, dedicada a ofrecer un servicio personalizado y profesional a nuestros clientes.",
            subTitle: data.home && data.home.about && data.home.about.banner && data.home.about.banner.subTitle ? data.home.about.banner.subTitle : "Esto nos permite entender mejor que nadie las necesidades de nuestros clientes, por eso ponemos el foco en que la experiencia de compra o arriendo sea única",
            buttonText: data.home && data.home.about && data.home.about.banner && data.home.about.banner.buttonText ? data.home.about.banner.buttonText : "Conózcanos"
          }
        },
        services: {
          items: data.home && data.home.services && data.home.services.items.length ? data.home.services.items : [
            {
              title: "Compras",
              description: "Ofrecemos un servicio integral para la compra de propiedades, asesorándote en cada etapa del proceso para encontrar la opción que mejor se ajuste a tus necesidades y presupuesto."
            },
            {
              title: "Venta",
              description: "Nos encargamos de la venta de tu propiedad con un enfoque profesional, desde la evaluación y marketing hasta la negociación y cierre del trato, asegurando la mejor transacción para ti."
            },
            {
              title: "Arriendo",
              description: "Gestionamos el arriendo de propiedades, incluyendo la búsqueda de inquilinos adecuados, la administración de contratos y el mantenimiento para asegurar una experiencia sin complicaciones para propietarios e inquilinos."
            }
          ]
        },
        reviews: {
          items: data.home && data.home.reviews && data.home.reviews.items.length ? data.home.reviews.items : [
            {
              id: null,
              review: "Necesitaba realizar de manera urgente la venta de una propiedad en la ciudad de Osorno y escogí los servicios de corretaje de Alejandra Gonzalez quien desde un primer momento confió plenamente en que este negocio podría tener buenos resultados, su apoyo fue fundamental para el éxito obtenido. Me siento enormemente conforme con el servicio entregado fue una venta ágil y se consiguió un excelente precio. Destacó de manera muy especial el profesionalismo y la gran calidad humana de Alejandra..",
              author: "Guillermina Báez Obando"
            },
            {
              id: null,
              review: "El servicio que me dio Alejandra fue super personalizado y empático! Siempre muy atenta y preocupada de cada detalle! Muy feliz con el servicio y la preocupación de Alejandra! Recomendadisimo!.",
              author: "Claudia Elgueta"
            }
          ],
          items2: data.home && data.home.reviews && data.home.reviews.items.length ? data.home.reviews.items : [
            {
              id: null,
              review: "ccc",
              author: "Guillermina Báez Obando"
            },
            {
              id: null,
              review: "El servicio que me dio Alejandra fue super personalizado y empático! Siempre muy atenta y preocupada de cada detalle! Muy feliz con el servicio y la preocupación de Alejandra! Recomendadisimo!.",
              author: "Claudia Elgueta"
            }
            ,
            {
              id: null,
              review: "Un servicio completo, ya que desde el inicio se nos informó de los pro y contras del proyecto; dándonos una tranquilidad absoluta en la decisión de comprar la parcela. Además de entregarnos muchos consejos y recomendaciones a la hora de adquirir el terreno, algo que nos dio confianza en la venta; situación que no encontramos en ningún otro proyecto que hayamos visto.",
              author: "Mauricio Vásquez Quezada"
            }
          ]
        }
      },
      about: {
        hero: {
          background: data.about && data.about.hero && data.about.hero.background ? data.about.hero.background : require("../images/template-about-hero-background.jpg"),
          title: data.about && data.about.hero && data.about.hero.title ? data.about.hero.title : "Un equipo de profesionales especializados en el sector inmobiliario."
        },
        history: {
          background: data.about && data.about.history && data.about.history.background ? data.about.history.background : require("../images/template-about-history-background.jpg"),
          description: data.about && data.about.history && data.about.history.description ? data.about.history.description : "<p>Somos Alejandra González, una empresa con varios años de trayectoria en el dinámico mercado inmobiliario, reconocidos por un servicio altamente personalizado y eficiente.</p><p>Nuestra gran fortaleza es el profundo conocimiento comercial inmobiliario que nos permite agregar valor a todos los proyectos que emprendemos y servicios que entregamos.<p/>",
          title: data.about && data.about.history && data.about.history.title ? data.about.history.title : "Nuestra Historia"
        },
        description: {
          items: data.about && data.about.description && data.about.description.items.length ? data.about.description.items : [
            {
              title: "Misión",
              description: "Ayudar a nuestros clientes a encontrar la propiedad de sus sueños o a vender su propiedad actual de la manera más eficiente y rentable posible, asegurando siempre su tranquilidad y satisfacción a lo largo de todo el proceso."
            },
            {
              title: "Visión",
              description: "Convertirnos en la referencia principal en asesoría inmobiliaria en la región de Osorno, destacándonos por nuestra transparencia, profesionalismo y compromiso con el cliente."
            },
            {
              title: "Valores",
              description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliarios."
            }
          ]
        },
        description2: {
          items: data.about && data.about.description && data.about.description.items.length ? data.about.description.items : [
            {
              title: "Nexxos Chile",
              description: "Es una compañía líder en corretaje independiente, que se dedica a prestar un servicio integral a sus asociados con asesoría comercial, legal, en capacitación y vitrina de nuestro trabajo en las principales plataformas del mercado. Gracias a nuestra alianza con Nexxos tus propiedades estarán publicadas siempre en los principales portales del país."
            }
          ]
        },
        stats: {
          proffesionals: data.about && data.about.stats && data.about.stats.proffesionals ? data.about.stats.proffesionals : 3,
          properties: data.about && data.about.stats && data.about.stats.properties ? data.about.stats.properties : 100,
          years: data.about && data.about.stats && data.about.stats.years ? data.about.stats.years : 20,
          transactions: data.about && data.about.stats && data.about.stats.transactions ? data.about.stats.transactions : 200
        },
        team: {
          visible: true,
          items: data.about && data.about.team && data.about.team.items.length ? data.about.team.items : [
            {
              avatar: require("../images/template-team-member-1.jpg"),
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades.",
              email: "contacto@iaga.cl",
              fullName: "Alejandra González",
              phone: "+56 9 7350 2662"
            }
          ]
        },
        ubication: {
          title:  data.about && data.about.ubication && data.about.ubication.title ? data.about.ubication.title : "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto"
        }
      },
      contact: {
        map: {
          title: data.contact && data.contact.map && data.contact.map.title ? data.contact.map.title : "Encuéntranos en Osorno",
          subTitle: data.contact && data.contact.map && data.contact.map.subTitle ? data.contact.map.subTitle : "Centro de Osorno"
        },
        title: data.contact && data.contact.title ? data.contact.title : "¿Dudas? ¿Consultas? Estamos aquí para ayudarlo.",
        subTitle: data.contact && data.contact.subTitle ? data.contact.subTitle : "Envienos un mensaje y uno de nuestros asesores se pondra en contacto a la brevedad"
      }
    }
  );
}
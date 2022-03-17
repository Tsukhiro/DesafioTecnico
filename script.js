const select = document.getElementById('inputGroupSelect01')

changeLocal = () => {
    
    const textLocal = document.getElementById('descricao')

    if(select.value === 'vazio'){
        descricao.innerHTML = ""
    }

    if(select.value === 'Acre (AC)'){
        descricao.innerHTML = "O que que tem de bom no Acre? O que fazer em Rio Branco (Capital do Acre): os melhores passeios e pontos: Palácio Rio Branco, Novo Mercado Velho, Parque Ambiental Chico Mendes, Biblioteca Pública Estadual do Acre, Parque da Maternidade, Museu da borracha, Catedral de Nossa Senhora de Nazaré, Passarela Joaquim Macedo."
    }

    if(select.value === 'Alagoas (AL)'){
        descricao.innerHTML = "O que fazer em Alagoas? Curtir as piscinas naturais do Pratagy. Divulgação/Pratagy. ... Visitar São Miguel dos Milagres. ... Vislumbrar as águas de Paripueira. ... Descobrir a beleza de Maragogi. ... Relaxar na Praia de Ipioca e no Hibiscus Beach Club. ... Pegar uma onda na Praia do Francês. ... Ver o encontro entre mar e lagoa na Praia do Gunga. ... Relaxar em Dunas de Marapé"
    }

    if(select.value === 'Amapá (AP)'){
        descricao.innerHTML = "O que fazer em Amapá? Fortaleza de São José de Macapá, Centro de Pesquisas Museológicas Museu Sacaca, Marco Zero, Museu do Desenvolvimento Sustentável, Igreja de São José de Macapá, Praça Floriano Peixoto, Praça do Coco, Parque Nacional do Cabo Orange."
    }

    if(select.value === 'Amazonas (AM)'){
        descricao.innerHTML = "O que tem para fazer na Amazônia? O que fazer na Amazônia: Conhecer as duas grandes capitais: Manaus e Belém. ... Fazer uma imersão na Floresta Amazônica – em hotéis e em comunidades. ... Viajar de barco pela Amazônia. ... Experimentar a culinária local. ... Tomar banho de cachoeira em Presidente Figueiredo. ... Aventurar-se pelo Parque Nacional de Anavilhanas."
    }

    if(select.value === 'Bahia (BA)'){
        descricao.innerHTML = "O que fazer em Bahia? Costa do Descobrimento (Extremo Sul da Bahia) ...Costa do Dendê (Morro de São Paulo e Boipeba) ... Península de Maraú ... Costa do Cacau: Itacaré ... Salvador. ... Praia do Forte. ... Chapada Diamantina. Casa do Rio Vermelho... Rua do Mucugê... Igreja Matriz Nossa Senhora D'Ajuda."
    }

    if(select.value === 'Ceará (CE)'){
        descricao.innerHTML = "O que fazer em Ceará? Lagoa do Paraíso. A Lagoa do Paraíso é um lugar charmoso, ótimo para ter momentos relaxantes. ... Parque Nacional de Jericoacoara. ... Museu da Fotografia. ... Arajara Park. ... Praia do Morro Branco. ... Arena Castelão. ... Memorial da Cultura Cearense. ... Santuário Nossa Senhora de Fátima."
    }

    if(select.value === 'Distrito Federal (DF)'){
        descricao.innerHTML = "O que fazer em Distrito Federal? Palácio do Planalto... Pontão do Lago Sul... Santuário Dom Bosco... Parque da Cidade Sarah Kubitschek... Memorial JK... Jardim Botânico de Brasília... Lago Paranoá... Catedral Metropolitana... Parque Nacional de Brasília... Congresso Nacional."
    }

    if(select.value === 'Espírito Santo (ES)'){
        descricao.innerHTML = "O que fazer em Espírito Santo? Parque Pedra da Cebola... Praia de Camburi... Projeto Tamar Vitória... Praia Setiba... Convento Nossa Senhora da Penha... Praia Do Canto... Praia da Costa... Ilha do Boi... Praça dos Namorados + Praça da Ciência. ... Curva da Jurema. ... Instituto da Baleia Jubarte + Projeto Tamar + Praça do Papa... Triângulo das Bermudas."
    }

    if(select.value === 'Goiás (GO)'){
        descricao.innerHTML = "O que fazer em Goiás? Esquadrinhar a Chapada dos Veadeiros... Banhos termais em Rio Quente e Caldas Novas... Caminhar pelas serras, cachoeiras e casario histórico de Pirenópolis. ... Pescar no Araguaia... Comer receitas regionais em Goiânia... Voltar ao passado com a poesia de Cora Coralina e o Casario de Goiás."
    }

    if(select.value === 'Maranhão (MA)'){
        descricao.innerHTML = "O que fazer em Maranhão? Lençóis Maranhenses. Você quer viver a emoção de conhecer o paraíso do Nordeste brasileiro? ... São Luís do Maranhão. Capital do Maranhão, São Luís tem que ocupar lugar de destaque em seu roteiro de viagem! ... Delta do Parnaíba...Queimada dos Britos... Atins... Barreirinhas... Santo Amaro."
    }

    if(select.value === 'Mato Grosso (MT)'){
        descricao.innerHTML = "O que fazer em Mato Grosso? Parque Mãe Bonifácia... Caverna Aroe-Jari e Gruta da Lagoa Azul... Parque das Aguas Seo Fiote... Parque das Águas Quentes... Parque Nacional da Chapada dos Guimarães... Aquário Encantado... Parque Tia Nair... Cristo Redentor... Aquário Natural... Rio do Peixe."
    }

    if(select.value === 'Mato Grosso do Sul (MS)'){
        descricao.innerHTML = "O que fazer em Mato Grosso do Sul ? Gruta do Lago Azul. 7.554. Cavernas e grutas... Parque das Nações Indígenas ... Recanto Ecológico Rio da Prata... Rio Sucuri... Cachoeira Boca da Onça... Cachoeira das Araras... Aquário Natural... Rio do Peixe...Aldeia do Formoso... Salto das Nuvens..."
    }

    if(select.value === 'Minas Gerais (MG)'){
        descricao.innerHTML = "O que fazer em Minas Gerais? Capitólio - O Mar de Minas. Cenários Roseanos - Parque Nacional da Sempre-Viva – Curimataí. Diamantina: A Cidade Musical. Travessia Lapinha-Tabuleiro. Ouro Preto - A Cidade Monumento. Cenários Roseanos - Paredão de Minas. Conjunto Arquitetônico da Pampulha, em Belo Horizonte. Cidade histórica de Ouro Preto, Minas Gerais. Igreja de São Francisco de Assis e Igreja de Nossa Senhora do Carmo, em Mariana. Centro histórico de Tiradentes, em Minas Gerais. Cachoeira da Fumaça, em Carrancas."
    }

    if(select.value === 'Pará (PA)'){
        descricao.innerHTML = "O que fazer em Pará? Forte do Presépio. Pormenor no interior do Forte do Presépio, também conhecido como Forte do Castelo... Casa das Onze Janelas. ... Catedral Metropolitana de Belém. ... Mercado Ver-o-Peso. ... Mercado Municipal (“mercado das carnes”) ... Loja de Ervas Medicinais. ... Theatro da Paz. ... Basílica de Nossa Senhora de Nazaré."
    }

    if(select.value === 'Paraíba (PB)'){
        descricao.innerHTML = "O que fazer em Paraíba? Piscinas naturais: Picãozinho e do Seixas. ... Praias Tambaú e Cabo Branco. ... Praia do Bessa. ... Praia de Intermares e Jurandy do Sax. ... Praia de Camboinha e Areia Vermelha. ... Igreja e Centro Cultural de São Francisco. ... Centro Histórico. ... Parque Solon de Lucena. ... Piscinas naturais de Picãozinho... Ilha da Areia Vermelha... Praia do Poço."
    }
    
    if(select.value === 'Paraná (PR)'){
        descricao.innerHTML = "O que fazer em Paraná? Curitiba – Jardim Botânico. Foz do Iguaçu – Cataratas do Iguaçu. Ponta Grossa – Vila Velha. Antonina – Serra do Mar. Morretes – Trem da Serra Verde Express. Tibagi – Cânion Guartelá. Sapopema – Pico Agudo. Porto Rico – Praias e ilhas únicas. Eco Hotel Boungaville. Residencial Chalés Riviera. Refúgio do Canyon. Casas Di Monte Ecopousada."
    }

    if(select.value === 'Pernambuco (PE)'){
        descricao.innerHTML = "O que fazer em Pernambuco? Instituto Ricardo Brennand. 9.694. Museus especializados. ... Praia de Muro Alto. 15.870. Praias. ... Piscinas Naturais de Porto de Galinhas... Baía do Sancho... Praias. ... Alto do Moura... Bairros. ... Praia dos Carneiros... Centro Historico de Olinda... Praia de Cupe."
    }

    if(select.value === 'Piauí (PI)'){
        descricao.innerHTML = "O que fazer em Piauí? Delta do Parnaíba. Parque Nacional Serra da Capivara. Parque Ecológico da Cachoeira do Urubu. Praia de Barra Grande. Parque Nacional de Sete Cidades. Praia da Pedra do Sal. Lagoa do Portinho. Praia do Coqueiro. Praia de Macapá no Piauí. ... Delta do Parnaíba. ... Morro Branco no Delta do Parnaíba. ... Praia Pedra do Sal, em Parnaíba, Piauí."
    }

    if(select.value === 'Rio de Janeiro (RJ)'){
        descricao.innerHTML = "O que fazer em Rio de Janeiro? Copacabana. ... Pôr-do-sol no Arpoador. ... Morro dois Irmãos. ... Pista Claudio Coutinho e Trilha do Morro da Urca. ... Lagoa Rodrigo de Freitas. ... Parque das Ruínas. ... Praia do Secreto. ... Mirante do Caeté e Prainha... Sítio Roberto Burle Marx. ... Pista Cláudio Coutinho. ... Forte Duque de Caxias."
    }

    if(select.value === 'Rio Grande do Norte (RN)'){
        descricao.innerHTML = "O que fazer em Rio Grande do Norte? Praia da Ponta Negra. Praia do Forte. Mercado da Redinha. Praia de Camurupim. Lagoa de Alcaçuz. O maior cajueiro do mundo. Praia de Pipa. Parque da Cidade Dom Nivaldo Monte. Maracajaú. Pipa e Tibau do Sul. São Miguel do Gostoso."
    }

    if(select.value === 'Rio Grande do Sul (RS)'){
        descricao.innerHTML = "O que fazer em Rio Grande do Sul? Rota romântica – Porto Alegre a Canela. Gramado a Canela. Bento Gonçalves a Garibaldi – Vale dos Vinhedos. Cambará do Sul – Rota dos Cânions. Rota das Salamarias. Rota do Yucumã Rota do Sol. Rota das Missões. Lago Negro... Arena do Grêmio... Vinícola Casa Valduga... Caminhos de Pedra."
    }

    if(select.value === 'Rondônia (RO)'){
        descricao.innerHTML = "O que fazer em Rondônia? Memorial Rondon, o Marechal da Paz. Locais históricos • Pontos de interesse. ... Parque Natural de Porto Velho... Espaço Alternativo de Porto Velho. Pontos de interesse. ... Capela de Santo Antônio de Pádua. ... Vale das Cachoeiras. ... Balneário Cachoeirinha. ... As Três Caixas D'Água. ... Estrada De Ferro Madeira Mamoré."
    }

    if(select.value === 'Roraima (RR)'){
        descricao.innerHTML = "O que fazer em Roraima? Orla Taumanan. Foto por Divulgação. ... Praça das Águas. Foto por Marcio Musolino. ... Praia Grande. Foto por Ederson Brito – MTUR. ... Parque Ecológico Bosque dos Papagaios. ... Praça do Centro Cívico. ... Centro Histórico. ... Igreja Nossa Senhora do Carmo de Rio Branco... 5 – Monumento aos Pioneiros. ... Praça da Bandeira. ... Catedral Cristo Redentor."
    }

    if(select.value === 'Santa Catarina (SC)'){
        descricao.innerHTML = "O que fazer em Santa Catarina?  Beto Carrero World. Mariscal – Bombinhas. As dunas de Florianópolis. Serra Catarinense. Mariscal – Bombinhas. Lucas Silva. ... Canto Grande – Bombinhas... Serra do Rio do Rastro... Nova Veneza. ... Praia das Laranjeiras / Ilha das Cabras – Balneário Camboriú ... As Dunas de Florianópolis. ... São Francisco do Sul. ... Meia Praia – Itapema."
    }

    if(select.value === 'São Paulo (SP)'){
        descricao.innerHTML = "O que fazer em São Paulo?  Parque Ibirapuera. Construído em 1954, o Parque Ibirapuera é um parque urbano localizado no bairro Moema, zona sul de São Paulo. ... Avenida Paulista. ... Pinacoteca do Estado de São Paulo. ... Rua Augusta. ... Museu do Futebol. ... Allianz Parque. ... Catavento Cultural e Educacional. ... Mercado Municipal."
    }

    if(select.value === 'Sergipe (SE)'){
        descricao.innerHTML = "O que fazer em Sergipe?  Orla do Atalaia e Projeto Tamar. Ilha da Sogra e Mangue Seco. Museus e mercado municipal de Aracaju. Cânion do Xingó. Parque dos Falcões. Laranjeiras e São Cristovão. Crôa do Goré e Lagoa do Tambaqui. Centro histórico/Praça São Francisco. Projeto Tamar. Passarela do Caranguejo. Museu da Gente Sergipana."
    }

    if(select.value === 'Tocantins (TO)'){
        descricao.innerHTML = "O que fazer em Tocantins?  Praia da Graciosa. ... Ilha Canela... Parque Cesamar... Cachoeira do Roncador... Cachoeira do Evilson...  Praça Dos Girassóis... Cachoeira do Formiga... Praia do Prata. Almas. O que fazer em Almas. ... Rio da Conceição. ... Dianópolis. ... Taguatinga. ... Aurora do Tocantins e Lavandeira."
    }

    
}

select.addEventListener('change', changeLocal)


const vacancies = []

function menu() {

    return parseInt(prompt(
        "Cadastro de Vagas de Emprego" +
        "\nEscolha uma opção:" +
        "\n1 - Listar vagas disponíveis" +
        "\n2 - Criar uma nova vaga" +
        "\n3 - Visualizar uma vaga" +
        "\n4 - Inscrever um candidato" +
        "\n5 - Excluir uma vaga" +
        "\n6 - Sair"
    ))
}

function showVacanciesAvailable() {

    let textVacancy = ""
    for(let i = 0; i < vacancies.length; i++) {
        textVacancy += "Índice "+ i + ". "+ vacancies[i].name  +
                "\nQuantidade de candidatos: "+ vacancies[i].candidates.length +"\n\n"
    }

    alert("Informações sobre as vagas disponíveis \n\n"+ textVacancy)
}

function newVacancy() {

    const name = prompt("Nome da vaga")
    const description = prompt("Descrição da vaga")
    const limitDate = prompt("Data limite de inscrição")

    const confirmation = confirm(
        "Deseja criar uma vaga com essas informações?\n" +
        "\nNome: "+ name +"\nDescrição: "+ description + "\nData limite: "+ limitDate
    )

    if(confirmation) {
        const newVacancy = {name, description, limitDate, candidates: []}
        vacancies.push(newVacancy)
        alert("Vaga criada")
    } else {
        alert("Vaga não criada")
    }
}

function viewVacancy() {

    const index = parseInt(prompt("Informe o índice da vaga"))

    if(biggerThanArray(index)) {
        alert("Índice não encontrado")
        return
    }

    const textCandidates = vacancies[index].candidates.reduce(function(finalText, candidate) {
        return finalText += "\n- "+ candidate
    }, "")

    alert(
        "Vaga n° "+ index +
        "\nNome: "+ vacancies[index].name +
        "\nDescrição: "+ vacancies[index].description +
        "\nData limite: "+ vacancies[index].limitDate +
        "\nQuantidade de candidatos: "+ vacancies[index].candidates.length +
        "\nCandidatos inscritos: "+ textCandidates
    )
}

function registerCandidate() {

    const candidateName = prompt("Nome do candidato")
    const index = parseInt(prompt("Índice da vaga para inscrição"))

    if(biggerThanArray(index)) {
        alert("Índice não encontrado")
        return
    }
    
    const confirmation = confirm(
        "Deseja inscrever o candidato "+ candidateName +" na vaga n°"+ index +"?" +
        "\nInformações da vaga:" +
        "\nNome: "+ vacancies[index].name +"\nDescrição: "+ vacancies[index].description +"\nData limite: "+ vacancies[index].limitDate
    )

    if(confirmation) {
        vacancies[index].candidates.push(candidateName)
        alert("Inscrição realizada")
    } else {
        alert("Inscrição não realizada")
    }
}

function deleteVacancy() {

    const index = parseInt(prompt("Informe o índice da vaga que deseja excluir"))

    if(biggerThanArray(index)) {
        alert("Índice não encontrado")
        return
    }

    const confirmation = confirm(
        "Deseja excluir a vaga n°"+ index +" ?" +
        "\nInformações da vaga:" +
        "\nNome: "+ vacancies[index].name +"\nDescrição: "+ vacancies[index].description +"\nData limite: "+ vacancies[index].limitDate
    )

    if(confirmation) {
        vacancies.splice(index, 1)
        alert("Vaga removida")
    } else {
        alert("Vaga não removida")
    }
}

function biggerThanArray(element) {
    return element > vacancies.length - 1
}

function mainExecute() {

    let option
    do {
        option = menu()

        switch(option) {
            case 1:
                showVacanciesAvailable()
                break
            case 2:
                newVacancy()
                break
            case 3:
                viewVacancy()
                break
            case 4:
                registerCandidate()
                break
            case 5:
                deleteVacancy()
                break
            case 6:
                alert("Programa encerrado")
                break
            default:
                alert("Opção inválida")
        }

    } while(option !== 6)
}

mainExecute()
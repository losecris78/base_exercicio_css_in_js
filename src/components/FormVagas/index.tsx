import { FormEvent, useState } from 'react'
import { Formulario, SearchBtn, Input } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Input onChange={(e) => setTermo(e.target.value)}></Input>
      <SearchBtn>Pesquisar</SearchBtn>
    </Formulario>
  )
}
export default FormVagas

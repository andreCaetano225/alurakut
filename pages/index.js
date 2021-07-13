import { MainGrid, Box, ProfileRelationsBoxWrapper } from '../src/components/MainGrid';

import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
 


function ProfileSidebar(props) {

  return(
    <Box >
    <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}/>
  </Box>
  )
}

export default function Home() {
  const githubUser = 'andrecaetano225';
  const pessoasFavoritas= ['peas','omariosouto','rafaballerini','Diqxy1']

  return(
    <>
    <AlurakutMenu/>
   <MainGrid>
     <div className="profileArea" style={{ gridArea: 'profileArea'}}>
     <ProfileSidebar githubUser={githubUser}/>
     </div>
     <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
     <Box>
     <h1 className="title">
       Bem vindo(a)
     </h1>
     <OrkutNostalgicIconSet/>
     </Box>
     </div>
    <div    className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
    {/* <Box>
       Devs idolos!
     </Box> */}
     <ProfileRelationsBoxWrapper>
       <h2 className="smallTitle">
         Pessoa da comunidade ({pessoasFavoritas.length})
       </h2>
       <ul>
      {pessoasFavoritas.map( (itemAtual) => {
      return(
        <li>
         <a href={`/users/${itemAtual}`} key={itemAtual}>
           <img src={`https://github.com/${itemAtual}.png`}/>
           <span>{itemAtual}</span>
         </a>
         </li>
      )
      })}
      </ul>
     </ProfileRelationsBoxWrapper>
    </div>
   </MainGrid>
   </>
  )
}

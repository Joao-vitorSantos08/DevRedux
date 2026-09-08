import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAddress, fetchUsers, fetchUsersById} from '../../redux/user/slice'
import { use } from 'react'

export function Home() {
  const { user, users, loading } = useSelector((rootReducer) => rootReducer.user)
  const dispath = useDispatch()

  function handleDeleteAddress() {
    dispath(deleteAddress())
    alert("Endereço deletado com sucesso!")
  }

  const handleFetchUsers = () => {
    dispath(fetchUsers())
  }

  const handleFetchUserById = () => {
    const userId = 5
    dispath(fetchUsersById(userId))
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : "visitate"}, bem vindo!
            </h1>


            {user && (
              <span>Email: {user.email}</span>
            )}
            {user && user.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>{user.address.location}, n {user.address.number}</p>

                  <button onClick={handleDeleteAddress}>Deletar endereço</button>
                </div>
              </>
            )}

            <hr />
            <br />
            <h2>Lista de usuários</h2>
            {loading && <strong>Carregando usuários...</strong>}
            <button onClick={handleFetchUsers}>Buscar Usuário</button>
            <button onClick={handleFetchUserById}>Buscar usuário com ID</button>
            {users.map(user => (
              <div key={user.id}>
                <p> Nome do usuário: {user.name}</p>
              </div>
            ))}
          </div>

        </main>
      </div>
    </>
  )
}

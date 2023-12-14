import React from 'react';
import { useParams } from 'react-router-dom';
import ListGame from '../components/listGame';
import stylesDetail from '../styles/details.module.css';

const GameReview = () => {
  const { id } = useParams();
  const gameList = ListGame.props.gameList;
  const game = gameList.find((g) => g.id.toString() === id);

  if (!game) {
    return <div>Erreur : jeu non trouvé</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#282c34', color: '#fff', padding: '20px' }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <h1 style={{ textTransform: 'uppercase', fontSize: '2em', marginBottom: '20px' }}>{game.name}</h1>

        <div style={{ marginBottom: '20px' }}>
          <img src={game.image} alt={game.name.toUpperCase()} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }} />
        </div>

        <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Description du jeu :</h2>
        <p style={{ fontSize: '1.2em' }}>{game.description}</p>

        {/* Ajoutez des détails supplémentaires au besoin */}
        
        <div style={{ marginTop: '40px', borderTop: '1px solid #fff', paddingTop: '20px' }}>
          {/* Liste des commentaires */}
          <h3 style={{ marginBottom: '20px', fontSize: '1.5em' }}>Commentaires</h3>
          {/* Ajoutez la liste des commentaires ici si disponible */}

          {/* */}
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <input type="text" placeholder="Ajouter un commentaire" required style={{ flex: 1, padding: '8px', marginRight: '10px', fontSize: '1em' }} />
            <button style={{ background: '#61dafb', color: '#fff', border: 'none', padding: '8px 15px', cursor: 'pointer', fontSize: '1em' }}>Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameReview;

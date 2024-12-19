let Cards = ({ img, title, paragraph }) => {
    return (
        <>
            <div className="wrapper">
                <div className="card_container">
                    <div className="card">
                        <div className="header">
                            <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Natura"></img>
                        </div>
                        <div className="bottom">
                            <h2>Paesaggi</h2>
                            <p>Luoghi dove trascorrere bei momenti!</p>
                        </div>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card">
                        <div className="header">
                            <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Natura" />
                        </div>
                        <div className="bottom">
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card">
                        <div className="header">
                            <img src="https://images.pexels.com/photos/14092973/pexels-photo-14092973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Natura" />
                        </div>
                        <div className="bottom">
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card">
                        <div className="header">
                            <img src="https://images.pexels.com/photos/17217435/pexels-photo-17217435/free-photo-of-acqua-inverno-montagna-ghiaccio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Natura" />
                        </div>
                        <div className="bottom">
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card">
                        <div className="header">
                            <img src="https://images.pexels.com/photos/96387/pexels-photo-96387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Natura" />
                        </div>
                        <div className="bottom">
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card">
                        <div className="header">
                            <img src="https://images.pexels.com/photos/8905097/pexels-photo-8905097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Natura" />
                        </div>
                        <div className="bottom">
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cards
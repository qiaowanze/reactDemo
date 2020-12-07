
import React, { useContext } from "react";
import './index.css'

const AppContext = React.createContext({});

const Navbar = () => {
    const { username } = useContext(AppContext)

    return (
        <div className="navbar">
            <p>AwesomeSite</p>
            <p>{username}</p>
        </div>
    )
}

const Messages = () => {
    const { username, text } = useContext(AppContext)

    return (
        <div className="messages">
            <h1>Messages</h1>
            <p>1 message for {username}</p>
            <p className="message">useContext is awesome!</p>
            <p>{text}</p>
        </div>
    )
}

export default function App() {
    return (
        <AppContext.Provider value={{
            username: 'superawesome',
            text: '真不错 使用useContext'
        }}>
            <div className="App">
                <Navbar />
                <Messages />
            </div>
        </AppContext.Provider>
    );
}
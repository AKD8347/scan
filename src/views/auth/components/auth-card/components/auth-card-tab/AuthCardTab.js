function AuthCardTab({tab, activeTabId, onClick}) {
    const classes = ['auth-card__tab']

    if (tab.id === activeTabId) {
        classes.push('auth-card__tab--active')
    }

    return (
        <div
            className={classes.join(' ')}
            key={tab.id}
            onClick={onClick}
        >
            {tab.title}
        </div>
    )
}

export default AuthCardTab
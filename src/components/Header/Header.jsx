return (
  <div className={s.root}>
    <div className={s.container}>
      <Navigation className={s.nav} />
      <Link className={s.brand} to="/">
        <span className={s.brandTxt}></span>
      </Link>
      <div className={s.banner}>
        <h1 className={s.bannerTitle}>Cody Johnson</h1>
        <p className={s.bannerDesc}>Complex web apps made easy</p>
        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
      </div>
    </div>
  </div>
);

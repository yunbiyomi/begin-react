function Privacy({name, phone, email}){
    console.log(name, phone, email);
    return(
        <section>
            <h2>개인정보</h2>
            <p>이름 : {name}</p>
            <p>전화번호 : {phone}</p>
            <p>github : {email}</p>
        </section>
    )
}

export default Privacy;
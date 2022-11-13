function Icon(props) {
    let {name} = props;
    const iconsObject = {
        'icon-globe': <svg fill="rgba(55, 53, 47, 0.35)" width={props.width} viewBox="0 0 16 16"><path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M8,7L7.938,8h-1L7,7H5v2h1l1,1c0.313-0.333,1.021-1,2-1h1 l1,0.229C11.86,9.437,12.513,9.75,13,10v1l-0.938,1.407C10.993,13.393,9.569,14,8,14v-1l-1-1v-1l-2-1C4.018,9.547,3.25,8.938,3,8 L2.785,6c0-0.187,0.435-0.867,0.55-1L3.278,4.307C4.18,3.154,5.494,2.343,7,2.09V3.5L8,4c0.3,0,0.609-0.045,1-0.417 C9.382,3.22,9.719,3,10,3c0.698,0,1,0.208,1,1l-0.5,1h-0.311C9.612,5.279,9.261,5.506,9,6C8.749,6.475,8.475,6.773,8,7z M13,8 c-0.417-0.25-0.771-0.583-1-1V6l0.797-1.593C13.549,5.409,14,6.65,14,8c0,0.165-0.012,0.326-0.025,0.488L13,8z"></path></svg>,

        'icon-hint': <svg fill="rgba(55, 53, 47, 0.35)" viewBox="0 0 16 16" width={props.width || 30}><path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.84277 9.4248C8.21875 9.4248 8.45801 9.21289 8.47852 8.93262C8.47852 8.90527 8.47852 8.87109 8.47852 8.85059C8.49902 8.49512 8.74512 8.25586 9.18945 7.96875C9.85938 7.52441 10.2969 7.13477 10.2969 6.3418C10.2969 5.2002 9.27148 4.55078 8.06152 4.55078C6.89258 4.55078 6.09277 5.08398 5.88086 5.72656C5.83984 5.84277 5.81934 5.95898 5.81934 6.08203C5.81934 6.41016 6.0791 6.61523 6.35254 6.61523C6.60547 6.61523 6.76953 6.5127 6.90625 6.32812L7.01562 6.19141C7.24121 5.81543 7.56934 5.61719 7.97949 5.61719C8.5332 5.61719 8.90918 5.94531 8.90918 6.41016C8.90918 6.84082 8.62207 7.05273 8.04102 7.45605C7.55566 7.79102 7.2002 8.14648 7.2002 8.76855V8.84375C7.2002 9.22656 7.43262 9.4248 7.84277 9.4248ZM7.83594 11.5234C8.27344 11.5234 8.63574 11.2021 8.63574 10.7715C8.63574 10.3408 8.27344 10.0264 7.83594 10.0264C7.3916 10.0264 7.03613 10.3477 7.03613 10.7715C7.03613 11.2021 7.39844 11.5234 7.83594 11.5234Z"></path></svg>,

        'icon-link': <svg fill="rgba(55, 53, 47, 0.85)" viewBox="0 0 16 16" width={props.width || 30}><path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path></svg>,

        'icon-chevron-down': <svg fill="rgba(55, 53, 47, 0.35)" viewBox="0 0 30 30" width={props.width || 30 }><polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon></svg>,

        'icon-mail': <svg viewBox="0 0 17 12" width={props.width || 30}><path d="M3.09961 11.9639H14.1055C15.3359 11.9639 16.0469 11.2529 16.0469 9.84473V2.29785C16.0469 0.896484 15.3291 0.185547 13.9004 0.185547H2.89453C1.66406 0.185547 0.953125 0.889648 0.953125 2.29785V9.84473C0.953125 11.2598 1.6709 11.9639 3.09961 11.9639ZM7.68652 6.41992L2.52539 1.32715C2.67578 1.26562 2.85352 1.23145 3.05859 1.23145H13.9414C14.1533 1.23145 14.3379 1.26562 14.4883 1.33398L9.34082 6.41992C9.04688 6.71387 8.78027 6.84375 8.51367 6.84375C8.24023 6.84375 7.97363 6.70703 7.68652 6.41992ZM1.99902 9.84473V2.29785C1.99902 2.24316 1.99902 2.27051 1.99902 2.22266L5.92969 6.08496L2.00586 9.96094C1.99902 9.92676 1.99902 9.88574 1.99902 9.84473ZM15.001 2.30469V9.85156C15.001 9.87891 15.001 9.91309 15.001 9.94043L11.0977 6.08496L15.001 2.24316C15.001 2.30469 15.001 2.30469 15.001 2.30469ZM3.05859 10.918C2.86719 10.918 2.70312 10.8906 2.55957 10.8291L6.64746 6.78906L7.0918 7.22656C7.57031 7.69824 8.02832 7.89648 8.51367 7.89648C8.99219 7.89648 9.45703 7.69824 9.93555 7.22656L10.3799 6.78906L14.4609 10.8223C14.3105 10.8906 14.1396 10.918 13.9414 10.918H3.05859Z"></path></svg>,

        'icon-check': <svg viewBox="0 0 14 14" width={props.width || 30} ><polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon></svg>,


    }   
    
    return (
        <>
            {iconsObject[name]}
        </>
    );
}
  
export default Icon;
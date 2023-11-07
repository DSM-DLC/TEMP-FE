import { useRouter } from "next/router"

function Error({ statusCode }) {
    const router = useRouter()

    return (
        <div>
            <p>{statusCode ? `${statusCode} 서버 오류` : "클라이언트 오류"}</p>
            <div>
                <button onClick={() => router.replace("/home")}>Home으로 돌아가기</button>
            </div>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error

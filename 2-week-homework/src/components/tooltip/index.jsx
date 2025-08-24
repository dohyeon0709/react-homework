export default function Tooltip({
    message = "개인 정보 보호를 위해 본인 기기에서만 이용해주세요",
}) {
    return (
        <div className="relative ml-12">
            <div className="absolute bg-[#f4f4f4] text-[#555555] py-[7px] px-2.5 text-xs">
                {message}
                <div className="absolute bottom-full left-[2%] rotate-180 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-gray-100" />
            </div>
        </div>
    );
}

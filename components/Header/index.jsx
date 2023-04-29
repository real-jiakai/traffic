import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-b border-gray-30 py-3 px-5">
			<div className="flex-grow">
				<div className="text-xl pl-6">
					流量监控
				</div>
			</div>
		</header>
    )
};

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600">Liên hệ với chúng tôi</p>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <form>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                                    placeholder="Nhập họ và tên"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;


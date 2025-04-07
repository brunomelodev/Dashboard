import { useState } from "react";

function ModalForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="border-2 px-4 py-2 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        ABRIR MODAL
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          {/* start: Overlay */}
          <div
            className="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* end: Overlay */}

          {/* start: Modal content */}
          <div className="relative z-50 w-full max-w-xl rounded-3xl bg-white p-5 lg:p-10">
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 sm:right-6 sm:top-6 sm:h-11 sm:w-11"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.04 16.54a1 1 0 0 0 1.42 1.42L12 13.41l4.54 4.54a1 1 0 1 0 1.42-1.42L13.41 12l4.55-4.54a1 1 0 0 0-1.42-1.42L12 10.59 7.46 6.04a1 1 0 0 0-1.42 1.42L10.59 12l-4.55 4.54Z"
                />
              </svg>
            </button>

            <form>
              <h4 className="mb-6 text-lg font-medium text-gray-800">
                Cadastro de Usuário
              </h4>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="João"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    placeholder="da Silva"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="joaodasilva@gmail.com"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="text"
                    placeholder="(14) 99999-9999"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Endereço
                  </label>
                  <input
                    type="text"
                    placeholder="Rua da Alegria, 580 - Bairro da Felicidade - Sorriso/SP"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="mt-6 flex w-full items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm text-white hover:bg-blue-700 disabled:bg-blue-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          {/* end: Modal content */}
        </div>
      )}
    </div>
  );
}

export default ModalForm;

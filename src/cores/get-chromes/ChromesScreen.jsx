import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Sticker from "../../components/Sticker";

function ChromesScreen({ hideChromesScreen }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="absolute h-5/6 w-10/12">
        <div className="h-1/2 flex w-full justify-evenly items-center my-20">
          <div className="h-full w-1/6">
            <Sticker />
          </div>
          <img
            className="w-1/6 h-full"
            src="https://s3-alpha-sig.figma.com/img/2b9e/8689/69418a9808e28686d4d80a6db2b8a8ae?Expires=1669593600&Signature=d~SGGXRBwO5oe51-L1cvU6NaezQeJCrNFV9Yr-rK1~Wsay6VLPwiEMyAVonPICpcv0Mu6NhvQg69ApaZtGtNP5PN-06CcqB2-AnGV6a~fbx7vK5oZNTs94BBEudNoH46WH-bIH92V8Vp-UJy01y23G3eETJxqJrWyQM4jassejQW-ZKKIU7eT6jyBvyPU2o44jKhZRBDaWgO6aHvyLhZD24SZ~9UdR6cn8XI8ZAJeRnMnrWAW~NgtzDLSTIrQjUOX-bPXXG4lt-xlAyE~wGDkWcdMyQx6sdFwDWbXWB1ZrdBcPQKAIMInh9Z9OYv5FsoKr89oYWZiTRgIruYs9HTew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />

          <img
            className="w-1/6 h-full"
            src="https://s3-alpha-sig.figma.com/img/fc19/eb45/fea604073db206ac74fd0a60ba843fed?Expires=1669593600&Signature=hvHu~KV~iValF9tiQpG5tAY8SBSRi9V3GqHILuoc4uGNIiJum64KogmEASqIUA3oXhBPrCkglfj~Ft6TuxsfDRJ51dpDbulHyl280esvQyRbX8mw7j49T9sUmcx4NhZFVtD5K5fF4a894oYByAxddd1b3DgAgEeDfP3LQ02DUJ1tcIkIVihBBPP3u5BFrhoYH~BgonBB5DOL1VY5lxUEpVDGwwla96Bg8DD3Tx1gffJXncQJR--8B~ZC-Qg7JxWfWwOmEblfPh5KhwDBtJusupqHLTXoRuM3OsdUq3alRI49BUHvuLoiQwkurVzrS-hujs9vmNy4tlJuOI2Ba00b5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />

          <img
            className="w-1/6 h-full"
            src="https://s3-alpha-sig.figma.com/img/bb60/b0c7/25b9c473d5b5a8cc32751777acf8bc2a?Expires=1669593600&Signature=WLHu1yiB7YIpQfIiup53h-yjMmrcZsVh4ZmqKtjZDqV-Gt99AL25aQyqrEKNK25vkPwFpzkdNUVlfNtTNu33ItT~nTD9QHFY4RVe8fuGmFqacpEvo5OnzrDShChIs9cvyN7GY~-tIoyY0Y5M8qK3BLlzvp~7Ykkc5zDcBPkD7mMxBG5HiRtGgygvyC5pqtS8qeHk3FywvaGVJDYer6aMF3zItskAhLygZ5Ax8D~PxaoARiVUselv9a1Ufqa0~9CikjrViDOO22pzXY8-6sVGbFMYKZjw9kAu87rOio3uuvot4mrc1yX-NWhhiDtaEdHjGrwnNlBkKxx1CRL0WFShbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
          <img
            className="w-1/6 h-full"
            src="https://s3-alpha-sig.figma.com/img/67bd/bb93/a23dd8929b981d9341cf7cbd6a766864?Expires=1669593600&Signature=eKXQM3eSy0JjYosK3C75WQj98oBpE8wS28IuPLJ1wELG2cqh7bqlaFYsS~F0V8i8nyi9aIV9yirMcmH4MlZNkENyMOLUANAFfXnCAQdYtyLexXJeoZ75kNOY~eCsxOHxj3x2olQIirxkNYbcPE3R8k4smlDFDddpADtOOEpke-0LO4nf8vKZAw~zbq2iZrOkYevgK6sNKZJSIq~nTuVA7WPn-UvKf7YCFwfoHgluX0rFnR81zEJNHW8IhnpIox3sPK-~9jkrYSs5WBlpIcC8MicLw9HzgufigGAeD5dThBpDZi-DeUAnIb0U8L1yqeQmFvUCbJISVHu8jPa19KKDsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-green-700 text-white text-2xl w-2/12 rounded-full p-4 flex justify-around hover:bg-green-800"
            onClick={() => hideChromesScreen(false)}
          >
            {" "}
            <BsCheckCircle size="2rem" />
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChromesScreen;

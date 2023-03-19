import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../actions";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3">

          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-1.5 flex items-center justify-between text-gray-900">
                <p class="tracking-wide">$189.99</p>

                <p class="text-xs uppercase tracking-wide">Shoes</p>
              </div>
            </div>
          </a>

          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-1.5 flex items-center justify-between text-gray-900">
                <p class="tracking-wide">$189.99</p>

                <p class="text-xs uppercase tracking-wide">Beauty</p>
              </div>
            </div>
          </a>

          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-1.5 flex items-center justify-between text-gray-900">
                <p class="tracking-wide">$189.99</p>

                <p class="text-xs uppercase tracking-wide">Electronics</p>
              </div>
            </div>
          </a>

          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-1.5 flex items-center justify-between text-gray-900">
                <p class="tracking-wide">$189.99</p>

                <p class="text-xs uppercase tracking-wide">Music</p>
              </div>
            </div>
          </a>

          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <div class="mt-1.5 flex items-center justify-between text-gray-900">
                <p class="tracking-wide">$189.99</p>

                <p class="text-xs uppercase tracking-wide">Shoes</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

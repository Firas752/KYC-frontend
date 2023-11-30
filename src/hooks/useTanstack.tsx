// import {
// 	QueryClient,
// 	QueryClientProvider,
// 	useQueryClient,
// } from "@tanstack/react-query";

// const defaultQueryClient = new QueryClient();

// function useTanstackQuery() {
// 	try {
// 		return useQueryClient();
// 	} catch {
// 		return defaultQueryClient;
// 	}
// }

// export { useTanstackQuery };
import {
	QueryClient,
	QueryClientProvider,
	useQueryClient,
} from "@tanstack/react-query";

const defaultQueryClient = new QueryClient();

function useTanstackQuery() {
	const queryClient = useQueryClient();

	if (!queryClient) {
		return defaultQueryClient;
	}

	return queryClient;
}

export { useTanstackQuery };

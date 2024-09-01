interface postionType {
    latitude: number | null;
    longitude: number | null;
}
declare function useLocation(): {
    position: postionType;
    error: string | null;
};

export { useLocation as default };

import { useEffect, useState } from 'react';

export default function Fetch() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, []);

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Fetch API</h1>

            <div className="row">
                {photos.slice(0, 12).map(photo => (
                    <div className="col-md-4 col-lg-3 mb-4" key={photo.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={photo.thumbnailUrl}
                                className="card-img-top"
                                alt={photo.title}
                            />
                            <div className="card-body">
                                <p className="card-text small">
                                    {photo.title}
                                </p>
                            </div>
                            <div className="card-footer text-center">
                                <a
                                    href={photo.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary btn-sm"
                                >
                                    View Image
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client";

import { ArrowRight, Mail, FileText } from "lucide-react";
import Button from "./button";

const BannerCta = () => {
    return (
        <div className="relative w-full py-12 md:py-20 px-6 md:px-16 lg:px-24 flex items-center justify-center min-h-[350px] overflow-hidden">


            {/* Content */}
            <div className="relative card z-20 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold font-heading pb-1 text-gradient mb-3">
                    Ready to Bring Your Vision to Life?
                </h2>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                    Let's create something exceptional together. Whether you need a new website,
                    application, or digital solution, we're here to help you succeed.
                </p>

                <div className="flex flex-col sm:flex-row justify-center pb-4 gap-4">
                    {/* Get Quote */}
                    <Button variant='primary' size='lg' className="py-4"  >
                        <FileText className="mr-2 h-5 w-5" />
                        Get a free Quote
                    </Button>

                    {/* Secondary Button */}
                    <Button variant="outline" size='lg'  >
                        <Mail className="mr-2 h-5 w-5" />
                        Contact Our Team
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BannerCta;
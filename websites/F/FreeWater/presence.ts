const presence = new Presence({
    clientId: "1019263816070082582",
}),
browsingTimestamp = Math.floor(Date.now() / 1000);

console.log("Hi")
presence.on("UpdateData", () => {
const presenceData: PresenceData = {
    largeImageKey: "logo",
    smallImageKey: "reading",
    smallImageText: "Watching FreeWaters website",
    startTimestamp: browsingTimestamp,
};

if (document.location.hostname === "freewater.io") {
    presenceData.details = "Viewing:";
    presenceData.state = "Home Page";
    if (document.location.pathname.includes("/advertise")) {
        presenceData.details = "Viewing:";
        presenceData.state = "Advertise Page";
    } else if (document.location.pathname.includes("/distribute")) {
        presenceData.details = "Viewing:";
        presenceData.state = "Distribute Page";
    } else if (document.location.pathname.includes("/faq")) {
        presenceData.details = "Viewing:";
        presenceData.state = "FAQ Page";
    } else if (document.location.pathname.includes("/careers")) {
        presenceData.details = "Viewing:";
        presenceData.state = "Careers Page";
    } else if (document.location.pathname.includes("/media")) {
        presenceData.details = "Viewing:";
        presenceData.state = "Media Page";
    } else if (document.location.pathname.includes("/contact-us")) {
        presenceData.details = "Viewing:";
        presenceData.state = "Contact Page";
    } else if (document.location.pathname.includes("/newsletter-signup")) {
        presenceData.details = "Viewing:";
        presenceData.state = "Newsletter Signup Page";
    } else if (document.location.pathname.includes("/shop")) {
        presenceData.details = "Viewing:";
        presenceData.state = "Shop Page";
    }
}

if (presenceData.details) presence.setActivity(presenceData);
else presence.setActivity();
});
